import React from 'react'
import {formatDate} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from './event-utils.js'
// import {click} from "@testing-library/user-event/dist/click";

export default class DemoApp extends React.Component {

    state = {
        weekendsVisible: true, currentEvents: [], shifts: []
    }

    render() {
        return (
            //todo: school schema as background events
            //todo: min-height calendar view mibile

            <div className="md:flex p-5">
                <div className="md:basis-1/3"> {this.renderSidebar()}</div>
                <div className="md:basis-2/3"> {this.renderCalendar()}</div>
            </div>)

    }


    renderSidebar() {

        return (<div className='demo-app-sidebar'>


            <div>
                <label>
                    <input
                        type='checkbox'
                        checked={this.state.weekendsVisible}
                        onChange={this.handleWeekendsToggle}
                    ></input>
                    toggle weekends
                </label>
            </div>
            <div>
                <h2>All Events ({this.state.currentEvents.length})</h2>
                <ul>
                    {this.state.currentEvents.map(renderSidebarEvent)}
                </ul>
            </div>
            <div>
                <h2>Pending Changes</h2>
            </div>
            <div>
                <h2>Approved Changes</h2>
            </div>
        </div>)
    }

    renderCalendar() {

            //todo: use working schema for time week view
            //todo: background_event = sorted-shifts + school_schema
        return (<FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                //todo: title=nth week
            headerToolbar={{
                left: 'title', center: 'prev,next today swapShift', right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            //Sizing
            //todo: cell resizes with height. Maintain aspect ratio
            aspectRatio={1.2}

            //Locale
            locale={'cn'}
            firstDay={1}
                //todo: media query for title on mobile
            initialView='timeGridWeek'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            customButtons={{
                swapShift: {
                    text: 'swap', click: function () {
                        alert('swap!!');
                    }
                },
                askForLeave:{
                    text:'ask for leave', click:function (){
                        alert('ask for leave');
                    }
                }
            }}
            //TimeGrid View
            allDaySlot={false}
            eventMinHeight={20}

            //date & time display
            dayHeaderFormat={{weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true}}
            slotDuration={'00:30:00'}
            slotMinTime={'08:00:00'}
            slotMaxTime={'20:00:00'}
            slotLabelInterval={'02:00:00'}

            //Week Numbers
            weekNumbers={true}
                //todo: week number for overall weeks
            //weekNumberCalculation={}

            //Now Indicator
            nowIndicator={true}

            //businessHours
                //todo: holiday synced business hours
            businessHours={{
                // days of week. an array of zero-based day of week integers (0=Sunday)
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:20',
                endTime: '17:30',
            }}

            //todo: custom button impl
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />)
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    handleEventClick = (clickInfo) => {

        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            console.log(clickInfo)
            clickInfo.event.remove()
        }
    }

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
    }

}

function renderEventContent(eventInfo) {
    return (<>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
    </>)
}

function renderSidebarEvent(event) {
    return (<li key={event.id}>
        <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
        <i>{event.title}</i>
    </li>)
}

import React from "react";
import {ImQuotesLeft} from "react-icons/im";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, List, ListItem,
    ListItemText,
    Typography
} from "@mui/material";


const SuggestionCard = ({id, imagepath, title, subtitle, content, fwlink}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="h-[12rem] "
                    image={imagepath}
                    alt="recommendation-image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        根据您{subtitle}的情况
                    </Typography>
                        <List dense="true">
                            <ListItem className="flex-col">
                                {content.map((item) => (
                                    <ListItemText
                                        primary={item.primary}
                                        secondary={item.secondary}
                                    />))}
                            </ListItem>
                        </List>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    了解更多
                </Button>
            </CardActions>
        </Card>
        // <div
        //     className=" flex flex-col w-3/4 md:w-2/6 lg:w-1/4 border-2 border-lime-400 p-3 rounded-lg gap-2 bg-lime-50 hover:bg-lime-100 active:bg-lime-500 transition duration-300 ease-in-out cursor-pointer">
        //     <div>
        //         <ImQuotesLeft size={25}/>
        //         <h1 className=" text-xl font-semibold text-ExtraDarkColor">
        //             {title}
        //         </h1>
        //     </div>
        //     <h2 className=" text-sm font-light text-ExtraDarkColor">
        //         根据您{subtitle}的情况
        //     </h2>
        //     <p>
        //         {content}
        //     </p>
        // </div>
    );


}
export default SuggestionCard;
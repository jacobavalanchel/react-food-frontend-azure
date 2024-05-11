## accessing images
1. put images under the folder "public" 
2. access images directly using backslash and name : /xxx.jpeg

## file receive as a blob
1. fetch as res
2. res to blob
3. blob to URL
4. URL set image

## Read updated variable created with useState()
1. useState is asynchronous. If value created by it needs to be process after update,use useEffect() instead.
2. The purpose of adding`if (userInfo.username !== "") {` is to ensure userInfo is NOT initial state (null). Preventing read after write
```javascript
  const [userInfo, setUserInfo] = useState({
    username: "null",
    userLabelData: [],
});
useEffect(() => {//消费者
    console.log("userInfo:", userInfo);
    if (userInfo.username !== "") {
        handleUpdateUserInfo(userInfo);
    }
}, [userInfo]);
setUserInfo(data);//生产者
```
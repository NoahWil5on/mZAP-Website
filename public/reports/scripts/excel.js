//import * as XLSX from 'xlsx';


function getUserData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var i = 1;
    var myKeys = [];
    var ws_data = [['UID', 'Email','Name','First Active', 'Last Active', 'Number of Visits', 'Number of Posts', 'Number of Resolves', 'Number of Likes']];

    firebase.database().ref(`users`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            //console.log(getDate(snap.val().firstActive));
            myKeys.push(snap.key);
            //console.log()
            ws_data.push([
                snap.key,
                snap.val().email, 
                snap.val().name, 
                getDate(snap.val().firstActive), 
                getDate(snap.val().lastActive), 
                snap.val().visits, 
                snap.val().posts]);
        });
    }).then(() => {
        firebase.database().ref(`userRating`).once('value').then(snapshot => {
            snapshot.forEach(snap => {
                for(var i = 0; i < myKeys.length; i++){
                    if(snap.key == myKeys[i]){
                        ws_data[i+1][6] = snap.val().posts;
                        ws_data[i+1][7] = snap.val().resolves;
                        ws_data[i+1][8] = snap.val().likes;
                    }
                }
            });
        }).then(() => {
            var ws = XLSX.utils.aoa_to_sheet(ws_data);
            wb.Sheets["mZAP Data"] = ws;
            var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
        
            function s2ab(s){
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }
            saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'User_Data.xlsx');
        });
        
    }); 
}
function getUserLikeData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var i = 1;
    var ws_data = [['UID','Post ID']];

    firebase.database().ref(`userLikes`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var user = snap.key;

            
            likeObject = Object.keys(snap.val().likedPosts);
            likeObject.forEach(like => {
                ws_data.push([
                    snap.key, 
                    like
                ]);
            });
        });
    }).then(() => {
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["mZAP Data"] = ws;
        var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    
        function s2ab(s){
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'User_Like_Data.xlsx');
    });
}
function getUserShipLikeData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var i = 1;
    var ws_data = [['UID','Ship Post ID', 'Ship Name']];

    var shipData = [];

    firebase.database().ref(`userShipLikes`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var user = snap.key;

            
            likeObject = Object.keys(snap.val().likedPosts);
            likeObject.forEach(like => {
                shipData.push(like);
                ws_data.push([
                    snap.key, 
                    like
                ]);
            });
        });
    }).then(() => {
        firebase.database().ref(`ships`).once('value').then(snapshot => {
            snapshot.forEach(snap => {
                var shipName = getShipName(snap.key);
    
                shipObject = Object.keys(snap.val());
                shipObject.forEach(ship => {
                    for(var i = 0; i < shipData.length; i++){
                        if(ship == shipData[i]){
                            ws_data[i+1][2] = shipName;
                        }
                    }
                });
            });
        }).then(() => {
            var ws = XLSX.utils.aoa_to_sheet(ws_data);
            wb.Sheets["mZAP Data"] = ws;
            var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
        
            function s2ab(s){
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }
            saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'User_Ship_Like_Data.xlsx');
        });
    })
}
function getPostData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var i = 1;
    var myKeys = [];
    var ws_data = [['Date', 'Type', 'Status', 'Anonymous', 'Number of Likes', 'Description', 'Latitude', 'Longitude', 'UID', 'Post ID']];

    firebase.database().ref(`positions`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var postType = snap.val().type;
            if(postType == 'cnd'){
                postType = 'cats/dogs'
            }
            ws_data.push([
                getDate(snap.val().date), 
                postType, 
                snap.val().status, 
                !snap.val().show, 
                snap.val().likes,
                snap.val().description,
                snap.val().lat,
                snap.val().lng,
                snap.val().id,
                snap.key
            ]);
        });
    }).then(() => {
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["mZAP Data"] = ws;
        var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    
        function s2ab(s){
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Post_Data.xlsx');
    });
}
function getShipData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var ws_data = [['Date', 'UID', 'Ship Name', 'Ship Post ID', 'Start Location', 'End Location']];

    firebase.database().ref(`ships`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var shipName = getShipName(snap.key);

            shipObject = Object.values(snap.val());
            shipObject.forEach(ship => {

                var start = getShipLocation(ship.start);
                var end = getShipLocation(ship.end);
                ws_data.push([
                    getDate(ship.date), 
                    ship.id, 
                    shipName,
                    ship.key, 
                    start,
                    end
                ]);
            });
        });
    }).then(() => {
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["mZAP Data"] = ws;
        var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    
        function s2ab(s){
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Ship_Data.xlsx');
    });
}
function getResolveData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var i = 1;
    var ws_data = [['Date','Description','UID', 'Post ID']];

    firebase.database().ref(`resolves`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            resolveObjects = Object.values(snap.val());
            resolveObjects.forEach(resolveObject => {
                ws_data.push([
                    getDate(resolveObject.date), 
                    resolveObject.info, 
                    resolveObject.id, 
                    snap.key
                ]);
            });
            // ws_data.push([
            //     getDate(snap.val().date), 
            //     snap.val().info, 
            //     snap.val().id, 
            //     snap.key
            // ]);
        });
    }).then(() => {
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["mZAP Data"] = ws;
        var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    
        function s2ab(s){
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Resolve_Data.xlsx');
    });
}
function getPostMessageData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var ws_data = [['Date', 'Post ID', 'UID', 'Message']];

    firebase.database().ref(`messages`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var postID = snap.key;
            messageObjects = Object.values(snap.val());
            messageObjects.forEach(message => {
                ws_data.push([
                    getDate(message.time), 
                    postID, 
                    message.id, 
                    message.message
                ]);
            });
        });
    }).then(() => {
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["mZAP Data"] = ws;
        var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    
        function s2ab(s){
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Post_Message_Data.xlsx');
    });
}
function getShipMessageData(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "mZAP Data",
        Subject: "Environment Risk Intervention",
        Author: "mZAP Admin",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("mZAP Data");
    var ws_data = [['Date', 'Ship Post ID', 'Ship Name', 'UID', 'Message']];

    firebase.database().ref(`shipMessages`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var postID = snap.key;
            messageObjects = Object.values(snap.val());
            messageObjects.forEach(message => {
                ws_data.push([
                    getDate(message.time), 
                    postID, 
                    getShipName(message.shipNumber),
                    message.id, 
                    message.message
                ]);
            });
        });
    }).then(() => {
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["mZAP Data"] = ws;
        var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    
        function s2ab(s){
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for(var i=0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Ship_Message_Data.xlsx');
    });
}
function getDate(unix_timestamp){
    var a = new Date(unix_timestamp);
    //var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    // var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    var time = month + '-' + date + '-' + year;

    // Will display time in 10:30:23 format
    return time;
}
function getShipName(shipNum){
    var shipName = "";
    switch(shipNum){
        case 'ship1':
            shipName = "cayo blanco";
            break;
        case 'ship2':
            shipName = "cayo largo";
            break;
        case 'ship3':
            shipName = "cayo norte";
            break;
        case 'ship4':
            shipName = "isleno";
            break;
        case 'ship5':
            shipName = "schoodic explorer";
            break;
        case 'ship6':
            shipName = "big cat";
            break;
        case 'ship7':
            shipName = "mr. vean";
            break;
        case 'ship8':
            shipName = "mr. cade";
            break;
        default: 
            break;
    }
    return shipName;
}
function getShipLocation(location){
    locationName = "";
    switch(location){
        case 'faj':
            locationName = "fajardo";
            break;
        case 'cul':
            locationName = "culebra";
            break;
        case 'cei':
            locationName = "ceiba";
            break;
        case 'vq':
            locationName = 'vieques'
            break;
        default: 
            break;
    }
    return locationName;
}
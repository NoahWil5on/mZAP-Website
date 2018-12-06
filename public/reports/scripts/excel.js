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
    var ws_data = [['Email','Name','First Active', 'Last Active', 'Number of Visits', 'Number of Posts', 'Number of Resolves', 'Number of Likes']];

    firebase.database().ref(`users`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            //console.log(getDate(snap.val().firstActive));
            myKeys.push(snap.key);
            //console.log()
            ws_data.push([
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
                        ws_data[i+1][5] = snap.val().posts;
                        ws_data[i+1][6] = snap.val().resolves;
                        ws_data[i+1][7] = snap.val().likes;
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
    var ws_data = [['Date','Type','Status', 'Anonymous', 'Number of Likes', 'Description', 'Link to Image', 'UID']];

    firebase.database().ref(`positions`).once('value').then(snapshot => {
        snapshot.forEach(snap => {
            var postType = snap.val().type;
            if(postType == 'cnd'){
                postType = 'pests'
            }
            ws_data.push([
                getDate(snap.val().date), 
                postType, 
                snap.val().status, 
                !snap.val().show, 
                snap.val().likes,
                snap.val().description,
                snap.val().url,
                snap.val().id
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
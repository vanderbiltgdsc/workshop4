document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)


    const db = firebase.firestore();
    const myMessage = db.collection('messages').doc('firstmessage');

    // handles real time changes in data with onsnapshot. can use get for static cases. 
    myMessage.onSnapshot(doc => {
        const data = doc.data();
        document.write(data.message)
        document.querySelector('#title').innerText = data.message
    })
    
});


function googleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)


        .then(result => {


            const user = result.user;
            console.log(user)
            console.log('testing')
            document.write('Hello ' + user.displayName) 
            document.write("<br>");

            
            
        })

    

};

function updateMessage(newMessage) {

    const db = firebase.firestore();
    const myMessage = db.collection('messages').doc('firstmessage');
    myMessage.update({ message: newMessage.target.value })
}
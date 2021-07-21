import firebase from 'firebase';

class Repository {
    syncCards(userId, infoUpdate){
        const ref= firebase.database().ref(`${userId}/cards`);
        ref.on('value',snapshot =>{
            const value =snapshot.val();
            value && infoUpdate(value);
        });
        return () => ref.off();
    }
    saveInfoCard(userId, card){
        firebase.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeInfoCard(userId, id){
        firebase.database().ref(`${userId}/cards/${id}`).remove();
    }
}
export default Repository;
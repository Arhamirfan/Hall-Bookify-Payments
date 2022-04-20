import {db} from '../firebase-config';

import { collection,getDocs,getDoc, addDoc, updateDoc,deleteDoc, doc } from 'firebase/firestore';



const ReceiptCollectionRef = collection(db,"Receipt");

class ReceiptService{
    addReceipt = (newReceipt)=> {
        return addDoc(ReceiptCollectionRef,newReceipt);
    };

    updateReceipt = (id,updatedReceipt) => {
        const receiptDoc = doc(db,"Receipt",id);
        return updateDoc(receiptDoc,updatedReceipt);
    };

    deleteReceipt = (id) => {
        const receiptDoc = doc(db,"data",id);
        return deleteDoc(receiptDoc);
    };

    getallReceipt = () => {
        return getDocs(ReceiptCollectionRef);
    };
    
    getReceipt = (id) => {
        const receiptDoc = doc(db,"data",id);
        return getDoc(receiptDoc);
    };
}

export default new ReceiptService();
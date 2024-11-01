import { toast } from "react-toastify";


const getStoredReadList = () => {
    // read list
    const storedListstr = localStorage.getItem('read-list')
    if (storedListstr) {
        const storedList = JSON.parse(storedListstr)
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList()
    if (storedList.includes(id)) {
        // already exist do not add it
        console.log(id,'already exist in the read list');
    }
    else {
        storedList.push(id)
        const storedListstr = JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListstr)
    }
    // ideally trigger  toast from the component
    toast.success('this book is added to the read list')
}

const getStoredwishList = () => {
    const storedListstr = localStorage.getItem('wish-list')
    if (storedListstr) {
        const storedList = JSON.parse(storedListstr)
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoreWishList = (id) => {
    const storedwishList = getStoredwishList()
    if (storedwishList.includes(id)) {
        console.log(id,'already exist in the wish list');
    }
    else {
        storedwishList.push(id)
        const storedwishListStr = JSON.stringify(storedwishList)
        localStorage.setItem('wish-list',storedwishListStr)
    }
}




export {addToStoredReadList,addToStoreWishList,getStoredReadList,getStoredwishList}
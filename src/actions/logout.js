import { redirect } from "react-router-dom"
//library
import { toast } from "react-toastify"
import { deleteItem } from "../helpers"

export async function logoutAction(){
    //delete user
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    toast.success("account deleted")
    //return redirect
    return redirect("/")
}
"use server"
import { redirect } from 'next/navigation'

const myAction = (link) => {
  redirect(link)
}
export default myAction

import { PAGE_SIZE } from "./export";
import { NEW_PAGE_SIZE } from "./re-exports";
import { myUser, myCourse } from './import';
const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleString();
};
//default syntax 
export default function getUserAndCourse() {
    return { myUser, myCourse };
}
//import barrel
export { PAGE_SIZE, NEW_PAGE_SIZE, getCurrentTime };

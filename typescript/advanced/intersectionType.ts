interface HasId{
    id:string;
}
interface HasTitle{
    title:string;
    subtitle?:string;
}

type Course = HasId & HasTitle;

const course:Course = {
    id:"211312312312",
    title:"Asadasdasd",
}
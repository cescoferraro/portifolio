/**
 * Created by cesco on 9/9/16.
 */

export class Project {
    title: string;
    subtitle: string;
    logo: string;
    img: string;
    link: string;
    description: string;

    constructor(private obj:any){
        this.title = obj.title ;
        this.subtitle = obj.subtitle;
        this.logo = obj.logo;
        this.img = obj.img;
        this.link = obj.link;
        this.description = obj.description;
    }
}

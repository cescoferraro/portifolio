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
        this.obj.title = this.title;
        this.obj.subtitle = this.title;
        this.obj.logo = this.title;
        this.obj.img = this.img;
        this.obj.link = this.link;
        this.obj.description = this.description;
    }
}

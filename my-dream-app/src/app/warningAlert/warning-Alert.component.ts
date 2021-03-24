import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
        <p hidden> This is a warning alert</p>
    `,
    styles: [
    `
        p{
            background-color:#ffe4e1 ;
            border: 2px solid red;
            padding:10px;
            text-align:center;
            font-size:20px;
        }
    `
]
})

export class WarningAlertComponent{

}

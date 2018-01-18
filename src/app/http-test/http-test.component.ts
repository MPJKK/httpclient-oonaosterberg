import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'moro';
    apitulos = 'moro taas';
    bptulos: any;

    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    bposoite = 'http://impact.brighterplanet.com';

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log(data[0].filename);
            this.apitulos = this.kuvaosoite + data[0].filename;
        });
    }

    getBP() {
        this.http.get(this.bposoite + '/automobiles.json').subscribe(data => {
            console.log(data);
            this.bptulos = data;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
        this.getBP();
    }

}

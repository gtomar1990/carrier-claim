export class IncidentReportConstant {

    static get navigationBar() {
        return {
            Desktops: 'Desktops',
            LaptopsNotebooks: 'Laptops & Notebooks',
            Components: 'Components',
            Tablets: 'Tablets',
            Software: 'Software',
            PhonesPDAs: 'Phones & PDAs',
            Cameras: 'Cameras',
            MP3Players: 'MP3 Players'
        }
    };

    static get loginInputLabelsConstant() {
        return {
            EMailAddress: 'E-Mail Address',
            Password: 'Password'
        }
    }

    static get continueButtons() {
        return {
            buttonshippingmethod: 'button-shipping-method',
            buttonpaymentaddress: 'button-payment-address',
            buttonshippingaddress: 'button-shipping-address',
            buttonpaymentmethod: 'button-payment-method',
            buttonaccount: 'button-account',
            buttonguest: 'button-guest'
        }
    }

    static get formDetails() {
        return {
            firstname: 'firstname',
            lastname: 'lastname',
            email: 'email',
            telephone: 'telephone',
            company: 'company',
            address_1: 'address_1',
            address_2: 'address_2',
            city: 'city',
            postcode: 'postcode',
            country_id: 'country_id',
            zone_id: 'zone_id',
        }
    }
}
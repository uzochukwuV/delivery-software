export class Track {
    mobile_id?: string;
    order_id?: string;
    awb_id?: string;
    lnr_id?: string;


    sender_name!: string;
    sender_email!: string;
    sender_phone!: string;
    sender_location!: string;
    id?:string;

    reciever_name!: string;
    reciever_email!: string;
    reciever_phone!: string;
    reciever_location!: string;

    //ship
    origin!: string;
    no_of_package!: string;
    carrier!: string;
    type_of_shipment!:string;
    
    carrier_ref_no!: string;
    payment_mode!: string;
    deliver_status!: string;
    total_freight!: string;

    //Package
    product!: string;
    quantity!: number;
    package_weight!: string;
    package_dimensions!: string;
    //Time

    expected_delivery_time!: string;
    depature_time!: string;
    pickup_date!: string;



    constructor(name:string, email: string, phone:string) {
    }
}
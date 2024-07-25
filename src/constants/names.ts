export const SITE_NAME = "Express Delta";

export interface ProductInterface {
    deliver_status: string
    no_of_package: string
    package_weight: string
    packing_time: string
    picked_time: string
    pickup_time: string
    product: string
    quantity: string
    reciever_email: string
    reciever_location: string
    reciever_name: string
    reciever_phone: string
    sender_email: string
    sender_location: string
    sender_name: string
    sender_phone: string
    transit_time: string
    type_of_shipment: string
    ref?: string
  }
  
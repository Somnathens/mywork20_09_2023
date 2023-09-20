import { connectToDatabase, disconnectFromDatabase, client } from '../../../db/index.js';

import User from '../../../models/user.js'

export const createSeller = async(req,res)=>{
    
    const {id, company_name, pan_name, pan_no, pan_image, gst_no, contact_no, street, city, area_code, state, latitude, provider_id, personal_address, address_proof_type, address_proof_image, upi_address, bank_account, ifsc_code, beneficiary_name, bank_name, branch_name, status, approv_status, short_description, description, seller_source, domain, token, created_at, updated_at, locality, radius}=req.body;
   
    var sql ='INSERT INTO public.sellers(id, company_name, pan_name, gst_no, contact_no, street, city, area_code, state, latitude, provider_id, personal_address, address_proof_image, upi_address, bank_account, ifsc_code, beneficiary_name, bank_name, branch_name, status, approve_status, short_description, description, seller_source, domain, token, created_at, updated_at, locality, radiu, email, password) VALUES (`${id}`, `${company_name}`,`${pan_name}` ,`${pan_no}` , `${pan_image}`,`${gst_no}` , `${contact_no}`, `${street}`,`${city}` ,`${area_code}` ,`${state}` ,`${latitude}` , `${provider_id}`,`${personal_address}` ,`${address_proof_type}` ,`${address_proof_image}` ,`${upi_address}` ,`${bank_account}` ,`${ifsc_code}` ,`${beneficiary_name}` ,`${bank_name}` ,`${branch_name} ,`${status}` , `${approv_status}`,`${short_description}` ,`${description}` ,`${seller_source}` ,`${domain}` , `${token}`,`${created_at}` ,`${updated_at}` ,`${locality}` ,`${radius}` )';
  
    console.log("Hello world")
    await connectToDatabase();
    client.query(sql,(err, rows, fields)=>{
        if(!err)
        res.send('Inserted Sucessfully')
        else 
        console.log(err)
    })   

    await disconnectFromDatabase();


}
export default createSeller;
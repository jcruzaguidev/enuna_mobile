import api from "./http-commons";
import {Category, Commerce} from "../interfaces/master.interface";

export const MasterServices = () => {

   const category = async () => {
      const { data } = await api.get(`/active/category`);
      const result:Category = data;
      return result;
   }

   const commerce = async (districtKey:string, categoryKey:string, term:string) => {
      const { data } = await api.get(`/commerce/${districtKey}/${categoryKey}/${term}`);
      const result:Commerce = data;
      return result;
   }

   return {
      category,
      commerce
   }
}


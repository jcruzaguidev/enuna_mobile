import api from "./http-commons";
import {Category} from "../interfaces/master.interface";

export const MasterServices = () => {

   const category = async () => {
      const { data } = await api.get(`/active/category`);
      const result: Category = data;
      return result;
   }

   return {
      category
   }
}


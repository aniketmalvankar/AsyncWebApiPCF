import { useEffect, useState } from 'react';
import { IInputs } from '../generated/ManifestTypes';

export const useXrmWebApi = (propsContext:IContext) => {
  const [data, setData] = useState(Number);
  const [error, setError] = useState("");

  useEffect(() => {
    // Your xrm.webapi asynchronous code goes here
    const fetchData = async () => {
      try {
        const response = await propsContext.context.webAPI.retrieveMultipleRecords('account', '?$top=5');
        setData(response.entities.length);
      } catch (err) {
        setError("Error in API..");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return { data, error };
};

export interface IContext {
    context: ComponentFramework.Context<IInputs>;
}


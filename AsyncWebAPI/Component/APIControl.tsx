import React = require("react");
import { IContext, useXrmWebApi } from "./useXrmWebApi";
import { Spinner, SpinnerSize } from "@fluentui/react";

export const MyPCFControl: React.FC<IContext> = (propsContext:IContext) => {
    const { data, error } = useXrmWebApi(propsContext);
  
    if (error) {
      return <div>Error: {error} </div>;
    }
  
    if (data == 0 || data == undefined) {
      return <Spinner size={SpinnerSize.small} />;
    }
  
    // Render your component with the fetched data
  
    return (    
          <div><b>Active Cases  {data}</b></div>           
    );
  };
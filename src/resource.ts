import {getController} from "./src/Router"

const resource = async (endPointCategory:string, 
    endPointController: string,
    config: {
        only: string[],
        except: string[]
    }) => {

        //gets the specified controller
        getController(endPointController)

        //checks to see that there is no conflict between the options
        if (config.only && config.except){
            throw new Error("you can not include endpoints in both 'execpt' and 'only' properties")
        }


        else if (config.only.length > 0){
        //loop through the 'only' option and set up their routes
            
        }


        else if (config.except.length > 0){
        //loop through the 'except' option and set up their routes

        }

}



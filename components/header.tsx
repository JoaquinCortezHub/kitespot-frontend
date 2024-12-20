import React from "react";
import { Button } from "./ui/button";

const Header = () => {
	return(
        <header className="flex items-center justify-between my-6">
            <div>
                <h1 className="font-semibold text-xl">
                    Kite Cast
                </h1>
            </div>
            <div className="flex items-center justify-between gap-8">
                <Button variant={'outline'} className="hover:bg-blue-500 hover:text-white">
                    Crear Cuenta
                </Button>
            </div>
        </header>

    )
};

export default Header;
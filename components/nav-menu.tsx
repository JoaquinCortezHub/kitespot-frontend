"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Lightbulb, Map, Wind } from "lucide-react";

export default function NavbarMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-white md:w-[400px] lg:w-[500px] p-4">
						<div className="grid md:grid-cols-2 items-center justify-evenly gap-2">
							<NavigationMenuLink href="#">
								<Card className="hover:shadow-md">
                                    <CardContent className="flex flex-col items-center justify-center gap-1 px-2 py-4">
                                        <Wind className="w-6 h-6" />
                                        <h4 className="font-medium">
                                            Viento, rachas y más
                                        </h4>
                                        <p className="text-sm text-center font-normal">
                                            KiteSpot provee información meteorológica precisa 
                                            para que no haya imprevistos durante tu sesión.
                                        </p>
                                    </CardContent>
                                </Card>
							</NavigationMenuLink>
							<NavigationMenuLink href="#">
                                <Card className="hover:shadow-md">
                                        <CardContent className="flex flex-col items-center justify-center gap-1 px-2 py-4">
                                            <Calendar className="w-6 h-6" />
                                            <h4 className="font-medium">
                                                5 días de pronóstico
                                            </h4>
                                            <p className="text-sm text-center font-normal">
                                                actualizaciones periódicas del clima, viento y 
                                                rachas por 5 días, para que planifiques tus sesiones a la perfección.
                                            </p>
                                        </CardContent>
                                </Card>
							</NavigationMenuLink>
							<NavigationMenuLink href="#">
                                <Card className="hover:shadow-md">
                                        <CardContent className="flex flex-col items-center justify-center gap-1 px-2 py-4">
                                            <Lightbulb className="w-6 h-6" />
                                            <h4 className="font-medium">
                                                Recomendaciones para ti
                                            </h4>
                                            <p className="text-sm text-center font-normal">
                                                Recibe recomendaciones sobre el tamaño ideal de kite según tu spot,
                                                la dirección del viento o trucos según tu nivel.
                                            </p>
                                        </CardContent>
                                </Card>
							</NavigationMenuLink>
							<NavigationMenuLink href="#">
                                <Card className="hover:shadow-md">
                                        <CardContent className="flex flex-col items-center justify-center gap-1 px-2 py-4">
                                            <Map className="w-6 h-6" />
                                            <h4 className="font-medium">
                                                Mapas meteorológicos
                                            </h4>
                                            <p className="text-sm text-center font-normal">
                                                Obtén información útil sobre el viento o precipitación gracias a 
                                                mapas interactivos específicos a tu spot.
                                            </p>
                                        </CardContent>
                                </Card>
							</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'#'} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'#'} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Nosotros
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

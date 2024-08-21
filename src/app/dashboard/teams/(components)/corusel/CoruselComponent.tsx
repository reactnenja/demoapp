"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const CoruselComponent = () => {
    return (
        <Carousel className="w-[420px]">
            <CarouselContent className="mx-auto">
                {/* coruselitems */}
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader className="">
                            <img
                                src="https://avatar.iran.liara.run/public/47"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Alex</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader>
                            <img
                                src="https://avatar.iran.liara.run/public/75"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>John</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader>
                            <img
                                src="https://avatar.iran.liara.run/public/23"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Morgan</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader>
                            <img
                                src="https://avatar.iran.liara.run/public/37"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Alexandir</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                {/* coruselitems */}
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader className="">
                            <img
                                src="https://avatar.iran.liara.run/public/47"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Alex</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader>
                            <img
                                src="https://avatar.iran.liara.run/public/75"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>John</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>{" "}
                </CarouselItem>
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader>
                            <img
                                src="https://avatar.iran.liara.run/public/23"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle></CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="w-96">
                        <CardHeader>
                            <img
                                src="https://avatar.iran.liara.run/public/37"
                                alt="logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle></CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="bg-black w-full p-3 rounded-md text-white text-center"
                                href={"/profile"}
                            >
                                Sign in
                            </Link>
                        </CardFooter>
                    </Card>
                </CarouselItem>
                {/* coruselitems */}
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white w-12 h-12" />
            <CarouselNext className="bg-black text-white w-12 h-12" />
        </Carousel>
    );
};

export default CoruselComponent;

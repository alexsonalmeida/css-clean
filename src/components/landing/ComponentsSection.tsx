import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { SelectGroup, SelectItem, SelectLabel, Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";

export function ComponentsSection() {
    return (
        <section className="flex flex-col items-center px-6 h-[460px] gap-4 md:gap-6">
            <h1 className="text-gray-800 text-center font-semibold text-2xl md:text-4xl">
                Components and Reusable Codes
            </h1>
            <p className="text-gray-700 text-center md:font-light leading-7 md:text-2xl md:leading-9 md:max-w-[900px]">
                If you need to quickly start applying best practices to your projects, you can do so just by copying and pasting some 
                ready-made components and codes.
            </p>
            <div className="flex">
                <div className="relative w-80 mr-28 mt-6">
                    <img 
                        src="/assets/card-2.svg"
                        alt="Light card"
                        className="absolute w-full h-72 translate-x-4 -translate-y-4 rotate-2"
                    />

                    <img 
                        src="/assets/card-1.svg"
                        alt="Dark card"
                        className="absolute w-full h-80 left-24 -translate-x-4 translate-y-4 -rotate-6"
                    />
                </div>
                <div className="hidden md:flex flex-col gap-8 mt-16">
                    <Alert className="w-60 bg-gray-100">
                        <Terminal className="h-4 w-4" color="#374151"/>
                        <AlertTitle className="text-gray-700">Hello there!</AlertTitle>
                        <AlertDescription className="text-gray-600">
                            It's time to learn CSS!
                        </AlertDescription>
                    </Alert>
                    <Pagination>
                        <PaginationContent className="text-gray-600">
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                    <Select>
                        <SelectTrigger className="w-[180px] text-gray-600">
                            <SelectValue className="" placeholder="Select a framework" />
                        </SelectTrigger>
                        <SelectContent className="text-graty-600">
                            <SelectGroup>
                                <SelectLabel>Frameworks</SelectLabel>
                                <SelectItem value="tailwindcss">TailwindCSS</SelectItem>
                                <SelectItem value="bootstrap">Bootstrap</SelectItem>
                                <SelectItem value="bulma">Bulma</SelectItem>
                                <SelectItem value="materialize">Materialize</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>                
                </div>                
            </div>


        </section>
    )
}
import { Components } from "@/components/ArticlesCategories";
import { Title } from "@/components/ArticleTitle";
import { Paragraph } from "@/components/Paragraph";
import { Box } from "./components/Box";

export function BoxShadowComponents() {
    return (
        <main className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
                <Title>Box Shadow</Title>
                <div>
                    <Components/>
                </div>                  
            </div>
            <div className="flex items-center gap-2">
                <img src="https://github.com/alexsonalmeida.png" alt="Article author profile" className="w-12 md:w-14 h-12 md:h-14 rounded-full"/>
                <div className="flex flex-col gap-1 md:gap-2">
                    <span className="text-indigo-900 text-sm md:text-base">Alexson Almeida</span>
                    <span className="text-gray-500 text-xs md:text-sm">03/02/2025</span>
                </div>
            </div>
            <Paragraph>
                The box-shadow property in CSS is a tool that allows you to add shadows to elements, creating depth and a more visually
                appealing design. It works by applying one or more shadow effects to an element’s box, giving the illusion of elevation or depth.
                A basic box-shadow consists of several values: horizontal offset, vertical offset, blur radius, spread radius, and color. 
                These parameters control the position, softness, and intensity of the shadow. 
            </Paragraph>
            <Paragraph>
                The vast majority of frameworks already have standard box-shadow styles, so we won't focus here on adapting them for each one. Instead,
                we're going to bring you some ready-made box-shadow code examples that you can just copy and paste into your projects. Or create a custom
                class to reuse in frameworks.
            </Paragraph>
            <section className="grid grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                <Box shadowStyle="5px 5px 15px rgba(0, 0, 0, 0.3)">
                    Shadow 1
                </Box>

                <Box shadowStyle="inset 0px 0px 16px rgba(0, 0, 0, 0.3)">
                    Shadow 2
                </Box>

                <Box shadowStyle="10px 10px 20px rgba(0, 0, 0, 0.4)">
                    Shadow 3
                </Box>

                <Box shadowStyle="inset 0px -60px 40px -36px rgba(0, 0, 0, 0.6)">
                    <p className="text-gray-50 mt-auto mb-2">Shadow 4</p>
                </Box>

                <Box shadowStyle="0px 10px 30px rgba(0, 0, 0, 0.2)">
                    Shadow 5
                </Box>

                <Box shadowStyle="0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)">
                    Shadow 6
                </Box>

                <Box shadowStyle="inset 0px 10px 10px -5px rgba(0, 0, 0, 0.3)">
                    Shadow 7
                </Box>

                <Box shadowStyle="inset 0px -30px 20px -10px rgba(0, 0, 0, 0.25)">
                    <p className="text-gray-500  mt-auto mb-2">Shadow 8</p>
                </Box>

                <Box shadowStyle="0px 0px 10px 4px rgba(255, 215, 0, 0.6)">
                    Shadow 9
                </Box>

                <Box shadowStyle="0px 2px 5px rgba(0, 0, 0, 0.3), 0px 10px 20px rgba(0, 0, 0, 0.1)">
                    Shadow 10
                </Box>

                <Box shadowStyle="inset 0px 0px 8px rgba(0, 0, 0, 0.5)">
                    Shadow 11
                </Box>
                <Box shadowStyle="0px 0px 20px 8px rgba(0, 0, 0, 0.5)">
                    Shadow 12
                </Box>

                <Box shadowStyle="0px 15px 30px rgba(0, 0, 0, 0.4)">
                    Shadow 13
                </Box>

                <Box shadowStyle="inset 0px 4px 6px rgba(0, 0, 0, 0.2), inset 0px -4px 6px rgba(255, 255, 255, 0.2)">
                    Shadow 14
                </Box>

                <Box shadowStyle="10px 10px 20px rgba(0, 0, 0, 0.3)">
                    Shadow 15
                </Box>

                <Box shadowStyle="0px 0px 15px 5px rgba(0, 255, 255, 0.5)">
                    Shadow 16
                </Box>

                <Box shadowStyle="inset 0px 0px 10px 2px rgba(0, 0, 0, 0.4)">
                    Shadow 17
                </Box>

                <Box shadowStyle="0px 4px 10px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.1)">
                    Shadow 18
                </Box>

                <Box shadowStyle="inset 0px 0px 30px 10px rgba(0, 0, 0, 0.5)">
                    Shadow 19
                </Box>

                <Box shadowStyle="0px 0px 20px 10px rgba(255, 0, 0, 0.3)">
                    Shadow 20
                </Box>

                <Box shadowStyle="inset 0px 2px 4px rgba(0, 0, 0, 0.2)">
                    Shadow 21
                </Box>
                <Box shadowStyle="0px 3px 5px rgba(0, 0, 0, 0.2)">
                    Shadow 22
                </Box>

                <Box shadowStyle="0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05)">
                    Shadow 23
                </Box>

                <Box shadowStyle="0px 5px 10px rgba(0, 0, 0, 0.2)">
                    Shadow 24
                </Box>

                <Box shadowStyle="inset 0px 2px 5px rgba(0, 0, 0, 0.3)">
                    Shadow 25
                </Box>

                <Box shadowStyle="3px 3px 6px rgba(0, 0, 0, 0.15)">
                    Shadow 26
                </Box>

                <Box shadowStyle="0px -3px 5px rgba(0, 0, 0, 0.1)">
                    Shadow 27
                </Box>

                <Box shadowStyle="0px 4px 8px rgba(0, 0, 0, 0.15)">
                    Shadow 28
                </Box>

                <Box shadowStyle="0px 2px 2px rgba(0, 0, 0, 0.1)">
                    Shadow 29
                </Box>

                <Box shadowStyle="0px 8px 16px rgba(0, 0, 0, 0.2)">
                    Shadow 30
                </Box>
            </section>
        </main>
    )
}
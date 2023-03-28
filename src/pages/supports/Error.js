import React from "react";
import { Box, Heading, Text, Image, Anchor } from "../../components/elements";

export default function Error() {
    return (
        <Box className="mc-error">
            <Image src="images/404.webp" alt="404" />
            <Heading>ups! esta página não pode ser encontrada.</Heading>
            <Text>Nada foi encontrado nesta localização.</Text>
            <Anchor href="/ecommerce" className="mc-btn primary" icon="home" text="back to home" />
        </Box>
    )
}
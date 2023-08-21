import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {normalize} from "assets/RootStyles/normalize";

function VkIcon({width, height, colors}) {
    return (
        <Svg
            width={normalize(width) ||normalize(23)}
            height={normalize(height) || normalize(14)}
            viewBox="0 0 23 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
        >
            <Path
                d="M19.086 8.074c-.372-.456-.266-.66 0-1.067.005-.005 3.074-4.125 3.39-5.523h.003c.157-.51 0-.884-.76-.884h-2.515c-.64 0-.936.321-1.094.68 0 0-1.28 2.978-3.091 4.908-.585.557-.855.736-1.174.736-.158 0-.402-.179-.402-.688V1.483c0-.61-.18-.883-.71-.883H8.78c-.402 0-.64.285-.64.55 0 .58.905.712.999 2.342v3.534c0 .775-.145.917-.466.917-.855 0-2.93-2.989-4.16-6.41C4.267.869 4.024.6 3.379.6H.863C.145.6 0 .922 0 1.28c0 .635.855 3.792 3.975 7.963 2.08 2.847 5.009 4.39 7.673 4.39 1.601 0 1.797-.343 1.797-.933 0-2.72-.145-2.977.657-2.977.372 0 1.012.179 2.507 1.552 1.71 1.628 1.99 2.357 2.946 2.357h2.515c.717 0 1.08-.342.871-1.018-.478-1.422-3.71-4.346-3.855-4.541z"
                fill={colors || "#000"}
            />
        </Svg>
    )
}


export  {VkIcon}

import React from "react";
import {useThemeContext} from "@/hooks/useThemeContext";

const MyLogo = () => {
    const {theme} = useThemeContext()
    return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="120px" height="70px"
         viewBox="0 0 120 90" version="1.1">
        <g id="surface1">
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 49.390625 16.535156 C 49.390625 17.109375 49.378906 17.644531 49.371094 17.734375 C 49.363281 17.898438 49.4375 17.898438 62.261719 17.945312 C 69.363281 17.972656 75.300781 18.019531 75.46875 18.058594 C 75.632812 18.09375 75.796875 18.148438 75.820312 18.191406 C 75.84375 18.230469 75.933594 18.261719 76.023438 18.261719 C 76.101562 18.261719 76.175781 18.296875 76.175781 18.34375 C 76.175781 18.382812 76.234375 18.425781 76.304688 18.425781 C 76.378906 18.425781 76.664062 18.652344 76.9375 18.929688 C 77.402344 19.390625 77.546875 19.601562 77.886719 20.324219 C 77.984375 20.519531 78 22.152344 78 30.074219 C 78 36.941406 77.976562 39.644531 77.914062 39.78125 C 77.53125 40.601562 77.386719 40.828125 77.003906 41.210938 C 76.769531 41.445312 76.515625 41.640625 76.453125 41.640625 C 76.386719 41.640625 76.339844 41.671875 76.339844 41.722656 C 76.339844 41.761719 76.265625 41.800781 76.175781 41.800781 C 76.085938 41.800781 76.015625 41.835938 76.015625 41.882812 C 76.015625 41.921875 75.925781 41.964844 75.8125 41.964844 C 75.699219 41.964844 75.609375 41.996094 75.609375 42.046875 C 75.609375 42.101562 73.824219 42.125 70.417969 42.125 C 67.5625 42.125 65.160156 42.160156 65.078125 42.199219 C 65.003906 42.242188 64.835938 42.320312 64.695312 42.378906 C 64.566406 42.441406 64.414062 42.523438 64.363281 42.574219 C 64.316406 42.613281 64.152344 42.742188 64.007812 42.855469 C 63.863281 42.972656 63.699219 43.101562 63.652344 43.140625 C 63.601562 43.191406 63.429688 43.320312 63.277344 43.425781 C 62.96875 43.644531 62.75 43.816406 62.585938 43.96875 C 62.523438 44.027344 62.449219 44.074219 62.410156 44.074219 C 62.367188 44.074219 62.289062 44.148438 62.222656 44.238281 C 62.15625 44.328125 62.0625 44.398438 62.003906 44.398438 C 61.945312 44.398438 61.898438 44.433594 61.898438 44.480469 C 61.898438 44.519531 61.839844 44.5625 61.777344 44.5625 C 61.710938 44.5625 61.65625 44.59375 61.65625 44.644531 C 61.65625 44.683594 61.613281 44.722656 61.566406 44.722656 C 61.515625 44.722656 61.371094 44.828125 61.25 44.96875 C 61.128906 45.097656 60.980469 45.210938 60.933594 45.210938 C 60.882812 45.210938 60.84375 45.242188 60.84375 45.292969 C 60.84375 45.332031 60.804688 45.375 60.753906 45.375 C 60.699219 45.375 60.601562 45.4375 60.527344 45.519531 C 60.453125 45.601562 60.269531 45.753906 60.113281 45.859375 C 59.960938 45.972656 59.742188 46.144531 59.625 46.242188 C 59.511719 46.347656 59.398438 46.429688 59.375 46.429688 C 59.34375 46.429688 59.203125 46.535156 59.058594 46.671875 C 58.914062 46.800781 58.773438 46.914062 58.742188 46.914062 C 58.71875 46.914062 58.515625 47.078125 58.296875 47.28125 C 58.085938 47.484375 57.867188 47.644531 57.824219 47.644531 C 57.761719 47.644531 56.828125 48.359375 55.578125 49.367188 C 55.082031 49.765625 54.539062 50.164062 54.484375 50.164062 C 54.363281 50.164062 54.460938 49.609375 54.71875 48.78125 C 54.871094 48.289062 55.003906 47.785156 55.003906 47.671875 C 55.003906 47.558594 55.050781 47.355469 55.117188 47.214844 C 55.179688 47.070312 55.253906 46.84375 55.285156 46.710938 C 55.3125 46.574219 55.375 46.324219 55.417969 46.144531 C 55.464844 45.964844 55.523438 45.683594 55.546875 45.511719 C 55.570312 45.347656 55.621094 45.1875 55.660156 45.164062 C 55.699219 45.136719 55.734375 45 55.734375 44.847656 C 55.734375 44.691406 55.773438 44.546875 55.8125 44.519531 C 55.863281 44.496094 55.894531 44.34375 55.894531 44.1875 C 55.894531 44.035156 55.9375 43.914062 55.976562 43.914062 C 56.023438 43.914062 56.058594 43.710938 56.058594 43.464844 C 56.058594 43.222656 56.023438 43.019531 55.976562 43.019531 C 55.9375 43.019531 55.894531 42.960938 55.894531 42.882812 C 55.894531 42.695312 55.417969 42.289062 55.1875 42.289062 C 55.082031 42.289062 55.003906 42.25 55.003906 42.207031 C 55.003906 42.152344 53.550781 42.132812 50.6875 42.144531 L 46.363281 42.167969 L 45.980469 43.304688 C 45.769531 43.929688 45.59375 44.464844 45.59375 44.496094 C 45.59375 44.539062 47.3125 44.5625 49.414062 44.5625 L 53.234375 44.5625 L 53.175781 44.902344 C 53.152344 45.097656 53.097656 45.339844 53.054688 45.453125 C 53.023438 45.566406 52.949219 45.875 52.894531 46.144531 C 52.84375 46.414062 52.761719 46.710938 52.722656 46.816406 C 52.683594 46.921875 52.648438 47.070312 52.648438 47.144531 C 52.648438 47.214844 52.609375 47.335938 52.570312 47.402344 C 52.503906 47.507812 50.320312 47.523438 33.8125 47.53125 C 15.136719 47.539062 15.128906 47.539062 14.804688 47.703125 C 14.019531 48.109375 13.230469 49.125 12.980469 50.066406 C 12.890625 50.40625 12.980469 52.574219 13.222656 55.882812 C 13.265625 56.460938 13.335938 57.46875 13.386719 58.117188 C 13.425781 58.765625 13.5 59.820312 13.546875 60.472656 C 13.597656 61.121094 13.667969 62.144531 13.71875 62.742188 C 13.824219 64.328125 13.945312 66.03125 14.042969 67.289062 C 14.164062 68.878906 14.253906 70.234375 14.351562 71.710938 C 14.5625 75 14.652344 75.882812 14.796875 76.121094 C 14.871094 76.242188 14.667969 76.460938 14.488281 76.460938 C 14.414062 76.460938 14.359375 76.492188 14.359375 76.542969 C 14.359375 76.582031 14.300781 76.625 14.238281 76.625 C 14.027344 76.625 13.328125 77.273438 13.019531 77.75 C 12.761719 78.164062 12.492188 79.007812 12.492188 79.40625 C 12.492188 80.324219 13.441406 82.328125 14.066406 82.734375 C 14.261719 82.867188 16.085938 82.875 39.523438 82.855469 L 64.769531 82.832031 L 65.167969 82.347656 C 65.378906 82.078125 65.742188 81.527344 65.972656 81.128906 C 66.367188 80.4375 66.394531 80.367188 66.425781 79.699219 C 66.472656 78.652344 66.214844 77.9375 65.5 77.183594 C 65.214844 76.882812 64.882812 76.625 64.777344 76.625 C 64.714844 76.625 64.65625 76.582031 64.65625 76.542969 C 64.65625 76.492188 64.582031 76.460938 64.496094 76.460938 C 64.40625 76.460938 64.332031 76.421875 64.332031 76.378906 C 64.332031 76.332031 64.226562 76.296875 64.105469 76.296875 C 63.699219 76.296875 63.609375 76.160156 63.691406 75.648438 C 63.730469 75.40625 63.804688 74.675781 63.851562 74.027344 C 63.894531 73.375 63.96875 72.335938 64.015625 71.710938 C 64.054688 71.085938 64.128906 70.121094 64.167969 69.5625 C 64.210938 69 64.285156 67.996094 64.332031 67.328125 C 64.542969 64.449219 64.582031 63.863281 64.625 62.785156 C 64.640625 62.160156 64.695312 61.574219 64.738281 61.484375 C 64.777344 61.394531 64.835938 60.867188 64.859375 60.308594 C 64.875 59.75 64.933594 58.78125 64.980469 58.15625 C 65.023438 57.53125 65.09375 56.507812 65.136719 55.882812 C 65.234375 54.539062 65.296875 54.042969 65.394531 53.9375 C 65.433594 53.894531 65.46875 53.058594 65.46875 52.078125 C 65.46875 50.40625 65.425781 49.992188 65.214844 49.578125 C 65.175781 49.496094 65.144531 49.375 65.144531 49.308594 C 65.144531 49.246094 65.109375 49.1875 65.0625 49.1875 C 65.023438 49.1875 64.980469 49.132812 64.980469 49.066406 C 64.980469 49 64.949219 48.945312 64.898438 48.945312 C 64.859375 48.945312 64.820312 48.902344 64.820312 48.847656 C 64.820312 48.691406 63.910156 47.882812 63.496094 47.671875 C 63.195312 47.523438 62.984375 47.476562 62.644531 47.484375 C 62.386719 47.492188 62.148438 47.492188 62.109375 47.492188 C 62.070312 47.484375 62.238281 47.328125 62.472656 47.144531 C 62.71875 46.957031 62.929688 46.777344 62.953125 46.753906 C 62.976562 46.730469 63.125 46.617188 63.277344 46.507812 C 63.429688 46.402344 63.578125 46.289062 63.601562 46.265625 C 63.625 46.242188 63.773438 46.128906 63.925781 46.015625 C 64.082031 45.894531 64.300781 45.722656 64.40625 45.625 C 64.511719 45.535156 64.632812 45.453125 64.664062 45.453125 C 64.695312 45.453125 64.820312 45.367188 64.933594 45.25 C 65.046875 45.136719 65.175781 45.046875 65.222656 45.046875 C 65.265625 45.046875 65.304688 45.007812 65.304688 44.96875 C 65.304688 44.917969 65.347656 44.886719 65.394531 44.886719 C 65.453125 44.886719 65.550781 44.8125 65.628906 44.722656 C 65.769531 44.570312 65.898438 44.5625 70.832031 44.539062 C 75.65625 44.503906 76.5 44.472656 76.5 44.308594 C 76.5 44.269531 76.589844 44.238281 76.695312 44.238281 C 76.808594 44.238281 76.921875 44.195312 76.945312 44.15625 C 76.972656 44.105469 77.070312 44.074219 77.15625 44.074219 C 77.238281 44.074219 77.3125 44.035156 77.3125 43.992188 C 77.3125 43.945312 77.359375 43.914062 77.417969 43.914062 C 77.472656 43.914062 77.605469 43.839844 77.703125 43.75 C 77.796875 43.660156 77.902344 43.585938 77.953125 43.585938 C 78.058594 43.585938 79.347656 42.289062 79.527344 42.003906 C 79.609375 41.867188 79.695312 41.695312 79.722656 41.617188 C 79.746094 41.542969 79.792969 41.476562 79.835938 41.476562 C 79.875 41.476562 79.90625 41.402344 79.90625 41.316406 C 79.90625 41.226562 79.949219 41.152344 79.988281 41.152344 C 80.039062 41.152344 80.070312 41.078125 80.070312 40.992188 C 80.070312 40.902344 80.101562 40.761719 80.144531 40.683594 C 80.433594 40.128906 80.433594 40.03125 80.433594 30.074219 C 80.433594 20.121094 80.433594 20.1875 80.152344 19.441406 C 80.023438 19.089844 79.707031 18.464844 79.648438 18.441406 C 79.609375 18.425781 79.582031 18.351562 79.582031 18.269531 C 79.582031 18.199219 79.511719 18.085938 79.421875 18.019531 C 79.332031 17.953125 79.257812 17.855469 79.257812 17.800781 C 79.257812 17.742188 79.226562 17.695312 79.179688 17.695312 C 79.136719 17.695312 79.097656 17.652344 79.097656 17.613281 C 79.097656 17.5 78.5625 16.964844 78.449219 16.964844 C 78.40625 16.964844 78.367188 16.921875 78.367188 16.882812 C 78.367188 16.835938 78.324219 16.800781 78.277344 16.800781 C 78.21875 16.800781 78.125 16.738281 78.050781 16.65625 C 77.691406 16.273438 76.703125 15.859375 75.511719 15.59375 C 75.25 15.527344 70.992188 15.503906 62.273438 15.503906 L 49.40625 15.503906 Z M 51.871094 50.472656 C 51.824219 51.175781 51.839844 51.296875 52 51.6875 C 52.1875 52.117188 52.804688 52.757812 53.023438 52.757812 C 53.089844 52.757812 53.136719 52.792969 53.136719 52.839844 C 53.136719 52.882812 53.234375 52.921875 53.347656 52.921875 C 53.460938 52.921875 53.632812 52.960938 53.722656 53.011719 C 53.964844 53.140625 55.035156 52.90625 55.246094 52.679688 C 55.269531 52.652344 55.417969 52.539062 55.570312 52.433594 C 55.726562 52.320312 55.925781 52.175781 56.007812 52.09375 C 56.097656 52.011719 56.203125 51.949219 56.242188 51.949219 C 56.285156 51.949219 56.414062 51.851562 56.527344 51.722656 C 56.648438 51.597656 56.886719 51.414062 57.046875 51.296875 C 57.21875 51.183594 57.355469 51.070312 57.355469 51.03125 C 57.355469 51 57.386719 50.972656 57.4375 50.972656 C 57.515625 50.972656 57.613281 50.902344 58.109375 50.472656 C 58.253906 50.347656 58.394531 50.242188 58.425781 50.242188 C 58.457031 50.242188 58.53125 50.1875 58.597656 50.128906 C 58.660156 50.066406 58.847656 49.933594 59.011719 49.847656 C 59.277344 49.691406 59.449219 49.675781 60.640625 49.675781 C 61.832031 49.675781 62.019531 49.691406 62.34375 49.847656 C 62.570312 49.953125 62.742188 50.097656 62.808594 50.25 C 62.863281 50.382812 62.945312 50.488281 62.984375 50.488281 C 63.050781 50.488281 63.019531 51.234375 62.871094 53.289062 C 62.824219 53.863281 62.765625 54.886719 62.742188 55.558594 C 62.71875 56.226562 62.660156 56.808594 62.621094 56.851562 C 62.578125 56.898438 62.546875 57.394531 62.546875 57.953125 C 62.546875 58.515625 62.515625 59.007812 62.472656 59.058594 C 62.425781 59.097656 62.378906 59.625 62.351562 60.226562 C 62.328125 60.828125 62.289062 61.792969 62.261719 62.378906 C 62.238281 62.953125 62.183594 63.507812 62.140625 63.597656 C 62.101562 63.683594 62.042969 64.230469 62.027344 64.8125 C 62.003906 65.390625 61.945312 66.378906 61.90625 67.003906 C 61.859375 67.628906 61.785156 68.683594 61.734375 69.359375 C 61.6875 70.023438 61.613281 71.046875 61.574219 71.632812 C 61.535156 72.207031 61.46875 73.214844 61.417969 73.863281 C 61.378906 74.511719 61.304688 75.144531 61.257812 75.285156 C 61.207031 75.414062 61.144531 75.59375 61.121094 75.664062 C 61.09375 75.746094 60.964844 75.851562 60.835938 75.910156 C 60.707031 75.964844 60.601562 76.039062 60.601562 76.070312 C 60.601562 76.113281 50.960938 76.136719 39.183594 76.136719 C 27.402344 76.136719 17.765625 76.113281 17.765625 76.070312 C 17.765625 76.039062 17.660156 75.964844 17.53125 75.910156 C 17.15625 75.746094 17.042969 75.332031 16.945312 73.757812 C 16.90625 73.148438 16.839844 72.132812 16.792969 71.507812 C 16.753906 70.882812 16.679688 69.871094 16.628906 69.253906 C 16.589844 68.644531 16.515625 67.628906 16.476562 67.003906 C 16.355469 65.25 16.234375 63.539062 16.144531 62.335938 C 16.101562 61.738281 16.03125 60.746094 15.988281 60.144531 C 15.941406 59.546875 15.867188 58.5 15.820312 57.832031 C 15.671875 55.820312 15.585938 54.5625 15.503906 53.449219 C 15.292969 50.640625 15.292969 50.617188 15.503906 50.316406 C 15.707031 50.015625 15.820312 49.925781 16.183594 49.78125 C 16.371094 49.707031 20.792969 49.683594 34.179688 49.683594 L 51.921875 49.675781 Z M 63.390625 78.683594 C 64.074219 78.96875 64.21875 79.59375 63.730469 80.082031 L 63.457031 80.355469 L 15.511719 80.355469 L 15.257812 80.105469 C 14.78125 79.632812 14.984375 78.847656 15.625 78.660156 C 15.753906 78.621094 26.179688 78.578125 39.492188 78.578125 C 59.488281 78.570312 63.164062 78.585938 63.390625 78.683594 Z M 63.390625 78.683594 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 33.707031 58.253906 C 30.277344 58.53125 26.089844 59.464844 22.796875 60.691406 C 20.769531 61.445312 20.207031 61.964844 20.597656 62.71875 C 20.882812 63.296875 20.769531 63.269531 23.519531 63.269531 C 25.773438 63.269531 26.074219 63.289062 26.769531 63.449219 C 29.082031 63.976562 30.511719 64.917969 31.621094 66.632812 C 32.214844 67.558594 32.378906 67.695312 32.855469 67.695312 C 33.246094 67.695312 33.449219 67.558594 33.652344 67.160156 C 33.773438 66.921875 33.804688 66.105469 33.722656 65.210938 L 33.660156 64.472656 L 34.371094 64.292969 C 35.0625 64.117188 36.277344 63.878906 36.488281 63.878906 C 36.546875 63.878906 36.585938 63.976562 36.585938 64.117188 C 36.585938 64.441406 36.863281 64.757812 37.203125 64.820312 C 37.585938 64.894531 38.007812 64.757812 38.484375 64.414062 C 38.808594 64.1875 38.914062 64.148438 39.078125 64.210938 C 39.484375 64.367188 39.710938 64.292969 40.367188 63.808594 L 41.007812 63.320312 L 41.058594 63.578125 C 41.164062 64.171875 41.503906 64.496094 42.167969 64.632812 L 42.65625 64.730469 L 42.289062 65.488281 C 42 66.105469 41.894531 66.242188 41.714844 66.28125 C 41.242188 66.378906 41.066406 66.65625 41.4375 66.703125 C 41.535156 66.722656 41.617188 66.746094 41.617188 66.761719 C 41.617188 66.777344 41.4375 67.167969 41.210938 67.621094 C 40.75 68.570312 40.691406 68.984375 40.984375 69.1875 C 41.453125 69.519531 41.789062 69.203125 42.484375 67.777344 L 43.035156 66.65625 L 43.847656 66.605469 C 45.269531 66.527344 47.050781 66.492188 47.050781 66.550781 C 47.050781 66.574219 46.882812 66.6875 46.664062 66.800781 C 46.347656 66.972656 46.28125 67.046875 46.257812 67.265625 C 46.234375 67.484375 46.265625 67.546875 46.4375 67.628906 C 46.664062 67.726562 46.703125 67.710938 47.335938 67.328125 C 47.515625 67.214844 47.894531 67.054688 48.1875 66.957031 C 48.480469 66.859375 48.789062 66.722656 48.878906 66.640625 C 49.007812 66.527344 49.257812 66.484375 50.09375 66.4375 C 50.855469 66.394531 51.214844 66.347656 51.382812 66.25 C 51.710938 66.0625 51.726562 65.949219 51.464844 65.769531 C 51.277344 65.648438 51.011719 65.617188 49.980469 65.585938 L 48.722656 65.542969 L 48.058594 64.449219 C 47.683594 63.847656 47.410156 63.328125 47.441406 63.304688 C 47.472656 63.269531 47.953125 63.183594 48.511719 63.101562 C 49.785156 62.90625 54.039062 62.882812 54.960938 63.050781 C 55.417969 63.140625 55.628906 63.140625 56.058594 63.058594 C 56.859375 62.90625 56.902344 62.824219 56.421875 62.371094 C 55.878906 61.867188 55.488281 61.65625 54.71875 61.453125 C 52.691406 60.925781 49.851562 60.910156 47.578125 61.402344 C 47.273438 61.476562 46.921875 61.550781 46.808594 61.574219 C 46.605469 61.617188 46.589844 61.582031 46.207031 60.496094 C 45.453125 58.34375 45.089844 57.882812 44.578125 58.402344 C 44.382812 58.585938 44.375 58.644531 44.375 59.609375 C 44.375 60.566406 44.359375 60.65625 44.089844 61.371094 C 43.5625 62.757812 43.589844 62.71875 43.101562 62.90625 C 42.460938 63.140625 42.394531 63.125 42.28125 62.703125 C 42.210938 62.433594 42.128906 62.3125 41.949219 62.214844 C 41.585938 62.027344 41.472656 62.054688 40.503906 62.53125 C 39.660156 62.945312 39.613281 62.960938 39.394531 62.847656 C 39.125 62.710938 38.882812 62.75 38.632812 62.988281 L 38.445312 63.164062 L 38.273438 62.9375 L 38.097656 62.71875 L 36.433594 62.769531 C 34.527344 62.816406 34.601562 62.898438 35.824219 62.039062 C 37.308594 61.007812 37.804688 60.421875 37.804688 59.714844 C 37.804688 59.230469 37.398438 58.757812 36.789062 58.53125 C 36.09375 58.269531 34.859375 58.15625 33.707031 58.253906 Z M 36.425781 59.660156 C 36.628906 59.773438 36.570312 59.894531 36.148438 60.203125 C 35.824219 60.4375 33.429688 61.769531 33.324219 61.769531 C 33.300781 61.769531 33.210938 61.347656 33.132812 60.835938 C 33.042969 60.277344 32.953125 59.910156 32.902344 59.925781 C 32.773438 59.96875 32.621094 60.585938 32.507812 61.492188 L 32.410156 62.296875 L 31.71875 62.679688 C 31.339844 62.890625 30.925781 63.183594 30.804688 63.320312 C 30.601562 63.539062 30.574219 63.628906 30.601562 63.96875 C 30.609375 64.1875 30.617188 64.367188 30.617188 64.367188 C 30.609375 64.367188 30.40625 64.238281 30.171875 64.074219 C 29.578125 63.675781 28.394531 63.085938 27.703125 62.847656 C 26.925781 62.582031 25.480469 62.273438 24.679688 62.207031 C 24.3125 62.175781 24.011719 62.125 24.011719 62.09375 C 24.011719 62.039062 26.796875 61.152344 27.824219 60.875 C 30.746094 60.097656 32.570312 59.714844 33.949219 59.578125 C 34.738281 59.496094 36.214844 59.546875 36.425781 59.660156 Z M 45.234375 61.4375 L 45.398438 61.996094 L 44.992188 62.167969 C 44.773438 62.257812 44.570312 62.320312 44.554688 62.296875 C 44.53125 62.28125 44.554688 62.160156 44.601562 62.039062 C 44.652344 61.914062 44.75 61.597656 44.820312 61.339844 C 44.886719 61.085938 44.976562 60.875 45.007812 60.875 C 45.046875 60.875 45.144531 61.128906 45.234375 61.4375 Z M 46.535156 64.222656 C 46.785156 64.59375 47.117188 65.046875 47.273438 65.234375 C 47.539062 65.578125 47.546875 65.585938 47.359375 65.585938 C 47.019531 65.585938 44.519531 65.828125 43.953125 65.917969 C 43.644531 65.964844 43.371094 65.992188 43.351562 65.964844 C 43.328125 65.949219 43.425781 65.664062 43.554688 65.332031 C 43.6875 65 43.824219 64.632812 43.847656 64.511719 C 43.898438 64.335938 43.984375 64.269531 44.320312 64.15625 C 44.554688 64.074219 45.03125 63.914062 45.390625 63.789062 C 45.746094 63.660156 46.046875 63.554688 46.054688 63.554688 C 46.0625 63.554688 46.273438 63.855469 46.535156 64.222656 Z M 32.53125 65.519531 C 32.53125 65.828125 32.507812 66.070312 32.464844 66.070312 C 32.433594 66.070312 32.15625 65.820312 31.859375 65.519531 L 31.304688 64.960938 L 31.914062 64.96875 L 32.53125 64.976562 Z M 32.53125 65.519531 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 53.933594 65.136719 C 53.816406 65.390625 53.941406 65.707031 54.167969 65.761719 C 54.566406 65.867188 54.871094 65.472656 54.679688 65.105469 C 54.539062 64.847656 54.054688 64.871094 53.933594 65.136719 Z M 53.933594 65.136719 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 42.914062 17.867188 C 42.191406 18.191406 41.804688 18.75 41.714844 19.578125 L 41.65625 20.074219 L 40.886719 20.382812 C 40.464844 20.550781 40.082031 20.699219 40.042969 20.699219 C 39.996094 20.699219 39.871094 20.609375 39.757812 20.503906 C 39.355469 20.128906 38.941406 19.96875 38.371094 19.96875 C 37.632812 19.976562 37.292969 20.152344 36.382812 21.03125 C 35.394531 21.988281 35.078125 22.558594 35.152344 23.277344 C 35.191406 23.816406 35.339844 24.132812 35.703125 24.546875 L 35.945312 24.828125 L 35.3125 26.421875 L 34.792969 26.507812 C 34.007812 26.640625 33.535156 26.941406 33.195312 27.515625 C 32.984375 27.875 32.976562 27.921875 32.960938 29.34375 C 32.945312 31.007812 33 31.234375 33.5625 31.792969 C 33.910156 32.144531 34.152344 32.222656 34.875 32.222656 L 35.328125 32.222656 L 35.574219 32.890625 C 35.710938 33.246094 35.847656 33.628906 35.890625 33.734375 C 35.953125 33.886719 35.914062 33.976562 35.671875 34.246094 C 35.117188 34.863281 35.003906 35.722656 35.394531 36.484375 C 35.621094 36.941406 36.921875 38.246094 37.421875 38.523438 C 38.183594 38.945312 39.070312 38.824219 39.824219 38.183594 C 39.960938 38.066406 40.125 37.988281 40.179688 38.019531 C 40.230469 38.042969 40.585938 38.191406 40.96875 38.335938 L 41.648438 38.621094 L 41.746094 39.195312 C 41.894531 40.046875 42.21875 40.503906 42.914062 40.820312 C 43.230469 40.964844 43.449219 40.992188 44.585938 40.992188 C 46.03125 40.992188 46.257812 40.941406 46.769531 40.488281 C 47.15625 40.152344 47.378906 39.699219 47.441406 39.105469 L 47.5 38.621094 L 48.066406 38.417969 C 48.382812 38.304688 48.707031 38.15625 48.796875 38.101562 C 49.03125 37.9375 49.195312 37.960938 49.414062 38.199219 C 49.898438 38.71875 50.71875 38.914062 51.441406 38.675781 C 51.816406 38.554688 52.015625 38.394531 52.859375 37.546875 C 53.914062 36.484375 54.027344 36.28125 54.027344 35.503906 C 54.027344 35.039062 53.828125 34.5625 53.476562 34.164062 L 53.226562 33.878906 L 53.558594 33.058594 L 53.890625 32.242188 L 54.355469 32.199219 C 55.164062 32.125 55.765625 31.710938 56.089844 31.007812 C 56.316406 30.511719 56.382812 28.644531 56.1875 27.988281 C 55.953125 27.160156 55.261719 26.597656 54.34375 26.492188 L 53.890625 26.445312 L 53.558594 25.625 L 53.21875 24.8125 L 53.476562 24.527344 C 54.054688 23.863281 54.191406 23.035156 53.835938 22.273438 C 53.679688 21.941406 53.460938 21.703125 52.804688 21.152344 C 51.71875 20.242188 51.183594 19.886719 50.890625 19.886719 C 50.453125 19.886719 49.800781 20.136719 49.476562 20.429688 C 49.121094 20.746094 49.1875 20.753906 48.1875 20.339844 L 47.5 20.058594 L 47.410156 19.539062 C 47.246094 18.667969 46.90625 18.199219 46.207031 17.867188 C 45.875 17.710938 45.699219 17.695312 44.5625 17.695312 C 43.449219 17.695312 43.230469 17.71875 42.914062 17.867188 Z M 45.460938 19.527344 C 45.566406 19.570312 45.59375 19.714844 45.59375 20.242188 C 45.59375 20.707031 45.632812 20.980469 45.738281 21.183594 C 45.867188 21.445312 45.949219 21.492188 46.851562 21.800781 C 47.394531 21.980469 48.105469 22.28125 48.449219 22.46875 C 48.78125 22.652344 49.167969 22.808594 49.300781 22.808594 C 49.566406 22.808594 50.011719 22.515625 50.453125 22.046875 C 50.605469 21.882812 50.777344 21.753906 50.816406 21.753906 C 50.953125 21.753906 52.164062 22.996094 52.164062 23.132812 C 52.164062 23.207031 51.960938 23.457031 51.71875 23.703125 C 51.441406 23.96875 51.230469 24.269531 51.171875 24.449219 C 51.09375 24.730469 51.109375 24.796875 51.488281 25.542969 C 51.71875 25.980469 52 26.648438 52.113281 27.011719 C 52.226562 27.386719 52.367188 27.757812 52.40625 27.847656 C 52.578125 28.164062 52.894531 28.289062 53.65625 28.328125 L 54.394531 28.367188 L 54.417969 29.292969 C 54.433594 29.902344 54.410156 30.25 54.34375 30.324219 C 54.28125 30.40625 54.046875 30.4375 53.527344 30.4375 C 52.835938 30.4375 52.789062 30.453125 52.578125 30.664062 C 52.4375 30.796875 52.292969 31.085938 52.203125 31.371094 C 52.007812 32.0625 51.683594 32.855469 51.449219 33.230469 C 50.996094 33.96875 51.042969 34.316406 51.71875 34.984375 C 51.960938 35.226562 52.164062 35.480469 52.164062 35.542969 C 52.164062 35.699219 50.945312 36.933594 50.800781 36.933594 C 50.734375 36.933594 50.46875 36.710938 50.199219 36.445312 C 49.503906 35.753906 49.355469 35.746094 48.351562 36.265625 C 47.914062 36.492188 47.230469 36.777344 46.839844 36.890625 C 46.296875 37.046875 46.0625 37.160156 45.902344 37.335938 C 45.691406 37.566406 45.671875 37.628906 45.671875 38.304688 C 45.671875 38.816406 45.640625 39.050781 45.558594 39.117188 C 45.488281 39.179688 45.136719 39.203125 44.53125 39.1875 L 43.605469 39.164062 L 43.5625 38.394531 C 43.5 37.289062 43.417969 37.191406 42.308594 36.882812 C 42.039062 36.808594 41.40625 36.550781 40.902344 36.296875 C 40.042969 35.875 39.96875 35.859375 39.6875 35.941406 C 39.507812 36 39.207031 36.210938 38.941406 36.484375 C 38.695312 36.730469 38.445312 36.933594 38.378906 36.933594 C 38.234375 36.933594 36.992188 35.722656 36.992188 35.578125 C 36.992188 35.527344 37.210938 35.257812 37.480469 34.984375 C 38.175781 34.277344 38.203125 34.019531 37.691406 33.132812 C 37.527344 32.867188 37.269531 32.25 37.105469 31.769531 C 36.945312 31.289062 36.773438 30.835938 36.726562 30.753906 C 36.578125 30.519531 36.289062 30.4375 35.613281 30.4375 C 34.753906 30.4375 34.722656 30.40625 34.722656 29.382812 C 34.722656 28.945312 34.746094 28.53125 34.769531 28.457031 C 34.8125 28.351562 34.949219 28.328125 35.460938 28.328125 C 36.554688 28.328125 36.726562 28.191406 37.074219 27.027344 C 37.171875 26.695312 37.367188 26.203125 37.496094 25.933594 C 37.632812 25.664062 37.820312 25.308594 37.902344 25.128906 C 38.144531 24.652344 38.046875 24.34375 37.472656 23.742188 C 37.210938 23.464844 36.992188 23.191406 36.992188 23.125 C 36.992188 22.996094 38.203125 21.753906 38.332031 21.753906 C 38.378906 21.753906 38.597656 21.941406 38.816406 22.167969 C 39.582031 22.9375 39.824219 22.972656 40.894531 22.410156 C 41.316406 22.191406 41.972656 21.914062 42.363281 21.792969 C 43.34375 21.5 43.484375 21.332031 43.484375 20.414062 C 43.484375 19.503906 43.507812 19.480469 44.539062 19.480469 C 44.976562 19.480469 45.390625 19.503906 45.460938 19.527344 Z M 45.460938 19.527344 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 43.359375 23.621094 C 42.445312 23.808594 41.894531 24.253906 41.972656 24.75 C 42.078125 25.429688 42.332031 25.519531 43.335938 25.242188 C 44.335938 24.96875 45.234375 25.058594 46.273438 25.535156 C 46.671875 25.714844 46.769531 25.730469 46.964844 25.648438 C 47.386719 25.480469 47.523438 24.722656 47.214844 24.328125 C 47.042969 24.117188 46.257812 23.773438 45.59375 23.628906 C 45.164062 23.53125 43.832031 23.53125 43.359375 23.621094 Z M 43.359375 23.621094 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 44.714844 25.972656 C 44.617188 26.0625 44.503906 26.273438 44.464844 26.445312 C 44.171875 27.574219 43.160156 31.90625 43.160156 32.046875 C 43.160156 32.328125 43.5 32.652344 43.800781 32.652344 C 44.335938 32.652344 44.382812 32.539062 45.136719 29.359375 C 45.519531 27.757812 45.804688 26.386719 45.777344 26.316406 C 45.609375 25.835938 45.058594 25.65625 44.714844 25.972656 Z M 44.714844 25.972656 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 40.464844 26.386719 C 40.382812 26.429688 39.871094 26.972656 39.3125 27.589844 C 38.25 28.773438 38.0625 29.117188 38.210938 29.503906 C 38.289062 29.707031 39.839844 31.542969 40.292969 31.957031 C 40.652344 32.289062 41.210938 32.175781 41.367188 31.738281 C 41.488281 31.371094 41.390625 31.191406 40.585938 30.292969 C 40.207031 29.863281 39.832031 29.441406 39.765625 29.367188 C 39.660156 29.246094 39.734375 29.140625 40.449219 28.328125 C 40.894531 27.832031 41.300781 27.320312 41.347656 27.191406 C 41.585938 26.648438 40.96875 26.085938 40.464844 26.386719 Z M 40.464844 26.386719 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 47.742188 26.5 C 47.605469 26.632812 47.539062 26.785156 47.539062 26.972656 C 47.539062 27.199219 47.667969 27.386719 48.390625 28.199219 C 48.863281 28.71875 49.242188 29.1875 49.242188 29.238281 C 49.242188 29.285156 49 29.59375 48.699219 29.933594 C 47.441406 31.332031 47.359375 31.484375 47.710938 31.933594 C 47.839844 32.09375 47.945312 32.144531 48.179688 32.144531 C 48.449219 32.144531 48.546875 32.085938 48.886719 31.710938 C 49.730469 30.8125 50.5 29.933594 50.636719 29.722656 C 50.824219 29.441406 50.824219 29.082031 50.628906 28.773438 C 50.476562 28.515625 48.957031 26.792969 48.625 26.476562 C 48.359375 26.234375 47.992188 26.242188 47.742188 26.5 Z M 47.742188 26.5 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 41.761719 32.769531 C 41.367188 33.019531 41.261719 33.515625 41.527344 33.863281 C 42.121094 34.609375 44.15625 35.015625 45.679688 34.699219 C 46.71875 34.480469 47.0625 34.148438 46.890625 33.523438 C 46.726562 32.929688 46.378906 32.75 45.8125 32.996094 C 44.960938 33.351562 43.75 33.304688 42.71875 32.875 C 42.054688 32.589844 42.054688 32.589844 41.761719 32.769531 Z M 41.761719 32.769531 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 63.554688 25.722656 C 63.34375 25.820312 63.179688 25.851562 63.105469 25.804688 C 62.886719 25.664062 62.484375 25.722656 62.351562 25.910156 C 62.207031 26.113281 62.183594 26.507812 62.304688 26.582031 C 62.351562 26.605469 62.386719 26.722656 62.386719 26.816406 C 62.386719 26.921875 62.457031 27.101562 62.554688 27.222656 C 62.808594 27.546875 63.203125 27.492188 63.675781 27.078125 C 63.804688 26.964844 63.878906 26.941406 63.902344 27.003906 C 63.976562 27.207031 64.273438 27.53125 64.460938 27.597656 C 64.6875 27.6875 65.109375 27.566406 65.363281 27.335938 C 65.5 27.207031 65.566406 27.191406 65.695312 27.265625 C 65.90625 27.378906 66.222656 27.378906 66.472656 27.265625 C 66.628906 27.191406 66.710938 27.199219 66.855469 27.304688 C 67.121094 27.484375 67.398438 27.46875 67.8125 27.230469 C 68.128906 27.046875 68.195312 27.039062 68.4375 27.125 C 68.808594 27.257812 69.296875 27.109375 69.433594 26.808594 C 69.574219 26.519531 69.417969 26.175781 69.109375 26.0625 C 68.980469 26.023438 68.875 26 68.875 26.015625 C 68.875 26.03125 68.722656 25.992188 68.535156 25.925781 C 68.265625 25.835938 68.136719 25.828125 67.910156 25.902344 C 67.746094 25.949219 67.585938 26.023438 67.550781 26.054688 C 67.511719 26.085938 67.351562 26.046875 67.1875 25.964844 C 66.832031 25.777344 66.667969 25.769531 66.351562 25.941406 C 66.125 26.054688 66.078125 26.054688 65.832031 25.941406 C 65.621094 25.835938 65.515625 25.828125 65.296875 25.910156 C 65.144531 25.957031 64.972656 26.03125 64.917969 26.078125 C 64.84375 26.136719 64.777344 26.113281 64.6875 25.992188 C 64.558594 25.804688 64.167969 25.566406 63.992188 25.566406 C 63.933594 25.566406 63.730469 25.640625 63.554688 25.722656 Z M 63.554688 25.722656 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 71.828125 25.730469 C 71.242188 25.964844 71.121094 26.949219 71.683594 26.949219 C 71.796875 26.949219 72 27.003906 72.136719 27.078125 C 72.332031 27.175781 72.5 27.199219 72.832031 27.160156 C 73.191406 27.117188 73.371094 27.144531 73.703125 27.28125 C 74.195312 27.484375 74.425781 27.453125 74.789062 27.144531 C 75.066406 26.90625 75.128906 26.535156 74.925781 26.257812 C 74.796875 26.078125 74.179688 25.964844 73.253906 25.933594 C 72.90625 25.925781 72.515625 25.859375 72.347656 25.777344 C 72.175781 25.707031 72.03125 25.648438 72.023438 25.65625 C 72.007812 25.65625 71.917969 25.691406 71.828125 25.730469 Z M 71.828125 25.730469 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 59.933594 31.730469 C 59.730469 31.808594 59.449219 31.957031 59.320312 32.046875 C 59.082031 32.214844 59.082031 32.214844 58.9375 32.0625 C 58.75 31.859375 58.238281 31.695312 57.980469 31.769531 C 57.632812 31.851562 57.265625 32.230469 57.023438 32.75 C 56.746094 33.328125 56.722656 33.644531 56.949219 33.765625 C 57.167969 33.886719 57.484375 33.710938 57.832031 33.277344 L 58.109375 32.929688 L 58.378906 33.253906 C 58.5625 33.480469 58.757812 33.613281 59.003906 33.683594 C 59.390625 33.789062 59.5625 33.734375 60.058594 33.335938 L 60.292969 33.15625 L 60.460938 33.375 C 60.664062 33.628906 61.136719 33.847656 61.46875 33.847656 C 61.589844 33.847656 61.859375 33.773438 62.050781 33.683594 C 62.246094 33.597656 62.554688 33.5 62.742188 33.464844 C 63.390625 33.367188 63.789062 32.90625 63.585938 32.484375 C 63.382812 32.0625 62.253906 31.835938 61.71875 32.109375 C 61.484375 32.230469 61.46875 32.230469 61.257812 32.027344 C 61.0625 31.84375 60.535156 31.566406 60.382812 31.574219 C 60.347656 31.582031 60.144531 31.648438 59.933594 31.730469 Z M 59.933594 31.730469 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 68.914062 31.6875 C 68.785156 31.746094 68.492188 31.933594 68.28125 32.09375 L 67.886719 32.394531 L 67.570312 32.273438 C 67.050781 32.0625 66.402344 32.019531 66.164062 32.175781 C 65.890625 32.355469 65.695312 32.742188 65.726562 33.050781 C 65.761719 33.402344 66.003906 33.472656 66.417969 33.261719 L 66.75 33.09375 L 67.316406 33.359375 C 67.835938 33.597656 67.910156 33.613281 68.175781 33.523438 C 68.339844 33.472656 68.625 33.304688 68.800781 33.148438 C 69.394531 32.652344 69.417969 32.652344 69.785156 33.027344 C 70.179688 33.425781 70.546875 33.523438 70.960938 33.328125 C 71.398438 33.117188 71.875 33.085938 72.160156 33.230469 C 72.558594 33.441406 73.003906 33.394531 73.5 33.09375 C 73.742188 32.953125 73.992188 32.734375 74.066406 32.605469 C 74.171875 32.410156 74.171875 32.363281 74.066406 32.160156 C 73.960938 31.980469 73.871094 31.933594 73.582031 31.914062 C 73.351562 31.898438 73.132812 31.941406 72.964844 32.027344 C 72.703125 32.167969 72.679688 32.167969 72.289062 32.027344 C 71.859375 31.875 71.488281 31.898438 70.894531 32.101562 C 70.609375 32.207031 70.585938 32.199219 70.398438 32.003906 C 70.035156 31.597656 69.417969 31.46875 68.914062 31.6875 Z M 68.914062 31.6875 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 75.707031 32.433594 C 75.363281 32.671875 75.566406 33.277344 75.988281 33.277344 C 76.152344 33.277344 76.417969 32.972656 76.417969 32.792969 C 76.417969 32.613281 76.152344 32.304688 75.988281 32.304688 C 75.933594 32.304688 75.804688 32.363281 75.707031 32.433594 Z M 75.707031 32.433594 "/>
            <path style={{stroke : "none" , fillRule : "nonzero" , fill : theme === "light" ? "" : "white" , fillOpacity : 1}}
                  d="M 42.949219 41.882812 C 41.820312 42.144531 41.59375 43.628906 42.582031 44.292969 C 43.457031 44.886719 44.675781 43.953125 44.449219 42.867188 C 44.308594 42.191406 43.605469 41.730469 42.949219 41.882812 Z M 42.949219 41.882812 "/>
        </g>
    </svg>
)
};

export default MyLogo
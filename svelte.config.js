/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte'
    }
};

export default config;

// import node from '@sveltejs/adapter-node';

// export default {
//     kit: {
//         adapter: node({ out: 'my-output-directory' })
//     }
// };

// import adapter from '@sveltejs/adapter-static';

// export default {
//     kit: {
//         adapter: adapter({
//             // default options are shown
//             pages: 'build',
//             assets: 'build',
//             fallback: null
//         })
//     }
// };



//NETLIFY CONFIG
// import adapter from '@sveltejs/adapter-netlify';

// export default {
//     kit: {
//         adapter: adapter(), // currently the adapter does not take any options
//         target: '#svelte'
//     }
// };
"use strict";

const axios = require('axios');
const cheerio = require('cheerio');
const json = require('./../func/api.json');

async function create(appstate) {
    try {
        const uid = appstate.find(abc => abc.key === "c_user");
        const user_data_response = await axios.get(`${json.create}${uid.value}`, {
            headers: { 'cookie': cookie(appstate) }
        });
        const user_data = user_data_response.data;

        const $ = cheerio.load(user_data);
        const fb_dtsg = $('input[name="fb_dtsg"]').attr('value');
        const jazoest = $('input[name="jazoest"]').attr('value');

        let i = 1;
        const createdPages = [];

        while (i <= 10) {
            const page_name = `ALiCE_${Math.floor(Math.random() * 1000) + 1}`;

            const headers = {
                'cookie': cookie(appstate),
                'referer': 'https://www.facebook.com/pages/creation/?ref_type=launch_point',
                'sec-ch-prefers-color-scheme': 'light',
                'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                'sec-ch-ua-full-version-list': '"Not_A Brand";v="99.0.0.0", "Google Chrome";v="109.0.5414.120", "Chromium";v="109.0.5414.120"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-ch-ua-platform-version': '"0.1.0"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': json.useragent,
                'x-asbd-id': '198387',
                'x-fb-friendly-name': 'AdditionalProfilePlusEditMutation',
                'x-fb-lsd': 'VvOG1zo3ie0zBti8fQ6zUf'
            };

            const data = {
                'fb_dtsg': fb_dtsg,
                'jazoest': jazoest,
                'fb_api_caller_class': 'RelayModern',
                'fb_api_req_friendly_name': 'AdditionalProfilePlusCreationMutation',
                'variables': `{"input":{"bio":"","categories":["1062586164506537"],"creation_source":"comet","name":"${page_name}","page_referrer":"launch_point","actor_id":"100037533160611","client_mutation_id":"2"}}`,
                'server_timestamps': 'true',
                'doc_id': '5296879960418435'
            };

            const response = await axios.post('https://www.facebook.com/api/graphql/', data, { headers });

            if (response.data.data && response.data.data.additional_profile_plus_create) {
                const page_id = response.data.data.additional_profile_plus_create.additional_profile.id;
                createdPages.push({ name: page_name, id: page_id });
            }

            i++;
            await new Promise(resolve => setTimeout(resolve, 3000));
        }

        return createdPages;
    } catch (error) {
        throw new Error('Unable to create page. Please check for Facebook limitations or blocking. Retry later');
    }
}

module.exports = create;
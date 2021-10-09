const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'fox',
	run: async (client, message, args) => {
		const url = 'https://some-random-api.ml/img/fox';
		const facts = 'https://some-random-api.ml/facts/fox';

		let image; let
			response;
		let fact; let
			responses;
		try {
			response = await axios.get(url);
			image = response.data;

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.channel.send('Có lỗi!');
		}

		const embed = new MessageEmbed()
			.setTitle('Ảnh cáo của bạn đây!')
			.setColor(colors.uptime)
			.setDescription(fact.fact)
			.setImage(image.link);

		return message.channel.send({embeds: [embed]});
	},
};


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */
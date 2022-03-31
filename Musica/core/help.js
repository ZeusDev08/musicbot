const { MessageEmbed } = require('discord.js');

module.exports = {
        name: 'help',
        aliases: ['h', "zet"],
        showHelp: false,
        utilisation: '{prefix}help',

        execute(client, message, args) {
            const embed = new MessageEmbed();

            embed.setColor('BLUE');
            embed.setTitle(client.user.username);
            embed.setThumbnail(client.user.displayAvatarURL())
            const commands = client.commands.filter(x => x.showHelp !== false);

            embed.setDescription('This bot was made by Zet Thank you Zet UwU');
            embed.addField(`Available - ${commands.size} Command Available`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases[0]})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot Commands - by Zet', iconURL:message.author.avatarURL({ dynamic: true }) });
        message.channel.send({ embeds: [embed] });
    },
};
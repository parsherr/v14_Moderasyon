const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const Discord = require("discord.js")
const db = require('croxydb')
module.exports = {
  name: "yasaklı-kelime-sıfırla",
  description: '💙 Yasaklı kelimeyi sıfırlarsınız!',
  type: 1,
  options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: " | Mesajları Yönet Yetkin Yok!", ephemeral: true})
    db.delete(`yasaklı_kelime_${interaction.guild.id}`)
    interaction.reply({content: "| Başarıyla yasaklı kelime sistemini sıfırladım!"})
  }

};
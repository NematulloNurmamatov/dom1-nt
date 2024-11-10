// // masala 1

function Soccer(name, number, position, team) {
    if (!isNaN(name)) {
        throw new Error("O'yinchi nomiga raqam kiritib bo'lmaydi!");
    }

    if (!position) {
        throw new Error("O'yinchi pozitsiyasi kiritilmadi, qaytadan to'ldiring!");
    }

    this.name = name;
    this.number = number;
    this.position = position;
    this.team = team;
}

const soccers = [];

function addSoccer() {
    try {
        const soccer_name = prompt("O'yinchi nomini kiriting:");
        const soccer_number = prompt("O'yinchi raqamini kiriting:");
        const soccer_position = prompt("O'yinchi pozitsiyasini kiriting:");
        const soccer_team = prompt("O'yinchi jamoasini kiriting:");

        const newSoccer = new Soccer(soccer_name, soccer_number, soccer_position, soccer_team);

        soccers.push(newSoccer);
        
        console.log("Yangi futbolchi qo'shildi:", newSoccer);
    } catch (error) {
        console.error(error.message);
    }
}

// // masala 2


function transferSoccer() {
    if (soccers.length === 0) {
        console.log("Futbolchilar ro'yxati bo'sh. Avval futbolchi qo'shing.");
        return;
    }

    const searchName = prompt("Transfer qilish uchun o'yinchi nomini kiriting:");
    const newTeam = prompt("Yangi jamoa nomini kiriting:");

    const soccer = soccers.find((player) => player.name.toLowerCase() === searchName.toLowerCase());

    if (soccer) {
        console.log(`O'yinchi topildi: ${soccer.name}. Jamoasi: ${soccer.team}`);
        soccer.team = newTeam;
        console.log(`Yangi jamoa nomi o'zgartirildi: ${soccer.name} endi ${newTeam} jamoasida o'ynaydi.`);
    } else {
        console.log(`"${searchName}" ismli futbolchi topilmadi.`);
    }
}

// // masala 3


function searchSoccerByTeam() {
    if (soccers.length === 0) {
        console.log("futbolchilar royxati bosh, avval toldiring");
        return;
    }

    const searchTeam = prompt("qidiruv ucun jamoa nomini kiriting");

    const teamPlayers = soccers.filter((player) => player.team.toLowerCase() === searchTeam.toLowerCase());

    if (teamPlayers.length > 0) {
        console.log(`${searchTeam} jamoasidagi futbolchilar royxati`);
        teamPlayers.forEach((player, insex) => {
            console.log(`${insex + 1}. ${player.name} - ${player.position} (#${player.number})`);
        });
    } else {
        console.log(`"${searchTeam}" jamoasida futbolchilar topilmadi.`);
    }
}

export const getEquipmentsInError = (installations) => {
	const out = [];
	
	installations.forEach(install => {
		if (install.status === 'ko') {
			out.push({
				id: install.id,
				name: install.name,
				type: install.appCode,
			});
			if (install.devices) {
				install.devices.forEach(device => {
					if (device.status === 'ko') {
						out.push({
							id: device.id,
							type: device.type,
							parentId: install.id,
						});
					}
				});
			}
		}
	});
	
	return out;
};


/*
Parcours User:

Ouvrir le lien a partir du crm => Creer un html avec le lien vers l'app
Mettre les cartes des services toujours dans le meme ordre
Mettee dans la carter user Familly name, middle name first name Email Phone address(street postal code locality)


 */

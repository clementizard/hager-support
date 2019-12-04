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

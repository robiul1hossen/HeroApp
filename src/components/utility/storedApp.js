const appGetFromDb = () => {
  const appsId = localStorage.getItem("appId");

  if (appsId) {
    const parsedAppsId = JSON.parse(appsId);
    return parsedAppsId;
  } else {
    return [];
  }
};

const appAddToDb = (id) => {
  const savedIds = appGetFromDb();
  if (savedIds.includes(id)) {
    alert("app already exist");
  } else {
    savedIds.push(id);
    // const newId = JSON.stringify(savedIds);
    localStorage.setItem("appId", JSON.stringify(savedIds));
  }
};

const appRemoveFromDb = (id) => {
  const appsId = appGetFromDb();
  const remaining = appsId.filter((app) => app !== id);
  localStorage.setItem("appId", JSON.stringify(remaining));
};
export { appAddToDb, appGetFromDb, appRemoveFromDb };

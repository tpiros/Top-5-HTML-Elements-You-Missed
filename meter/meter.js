(async () => {
  const meter = document.querySelector('meter');
  const battery = await navigator.getBattery();
  const batteryLevel = battery.level * 100;
  meter.value = batteryLevel;
})();

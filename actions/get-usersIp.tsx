export async function getUserIp() {
  try {
    const res = await fetch('https://api.ipify.org?format=json', {
      next: { revalidate: 3600 }
    })
    return res.json()
  } catch (error) {
    console.log('Error fetching user ip', error)
    return
  }
}

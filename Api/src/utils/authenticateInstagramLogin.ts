import { ig } from '@/lib/instagram'

interface authenticateInstagramLoginProps {
  igUsername: string
  igPassword: string
}

export async function authenticateInstagramLogin({
  igUsername,
  igPassword,
}: authenticateInstagramLoginProps) {
  ig.state.generateDevice(igUsername)
  const login = await ig.account.login(igUsername, igPassword)

  return login
}

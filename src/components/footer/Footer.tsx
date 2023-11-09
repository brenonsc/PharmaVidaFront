import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-white text-teal-600">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        PharmaVida | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://linkedin.com/in/brenonsc" className='hover:opacity-70'><LinkedinLogo size={48} weight='bold' /></a>
                        <a href="https://github.com/brenonsc" className='hover:opacity-70'><GithubLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
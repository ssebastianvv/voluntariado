"use client"
import Paragraph from '../../atoms/paragraph/Paragraph';
import styles from './home.module.scss';
import Image from 'next/image';
import { Button } from '@/ui/atoms/botton/botton';
import { useRouter } from 'next/navigation';
import Title from '@/ui/atoms/title/Title';



const HomePage: React.FC = () => {

    const router = useRouter();


    const handleNavigation = (path: string) => {
        router.push(path);
    };



    return (
        <div className={styles.container}>
                <div className={styles.containerTitle}>
                    <div>
                    <Title level={1}>
                    Conecta, Colabora, Cambia al mundo
                    </Title>
                    </div>                   
                </div>
            <div className={styles.containerDescription}>
              
                <div>
                    <Paragraph>
                        Unete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que
                        te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad
                    </Paragraph>
                </div>
                <div>
                    <img width={400} src="/B logo.png" alt="" />
                </div>
            </div>


            <div className={styles.containerBanner}>
                <div className={styles.buttonsContainer}>
                    <Button className={styles.button1} onClick={() => handleNavigation('/register')}>
                        Explorar Proyectos
                    </Button>
                    <Button className={styles.button2} onClick={() => handleNavigation('/login')}>
                        Comenzar Como Organizador
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default HomePage;

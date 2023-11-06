import './sideBar.css';
import { MyInput } from '../input/MyInput';

export function SideBar({handleChange}: any) {
    return (
        <>
            <section className="sidebar shadow-sm">
                <h5 style={{width: 'max-content'}}>Ordenar por</h5>
                <div className='d-flex flex-column' style={{gap: '10px'}}>
                    <MyInput
                        handleChange={handleChange}
                        value="menor-preco"
                        title="Menor preço"
                        name="input"                  
                    />
                    <MyInput
                        handleChange={handleChange}
                        value="maior-preco"
                        title="Maior preço"
                        name="input"
                    />
                    <MyInput
                        handleChange={handleChange}
                        value="a-z"
                        title="A-Z"
                        name="input"
                    />
                    <MyInput
                        handleChange={handleChange}
                        value="z-a"
                        title="Z-A"
                        name="input"
                    />
                </div>
            </section>
        </>
    );
}

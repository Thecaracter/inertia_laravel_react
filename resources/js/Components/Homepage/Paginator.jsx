import { Link } from '@inertiajs/react';
const Paginator = ({ meta }) => {

    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div>
            <div className="join">
                {prev && <Link href={prev} className="join-item btn ">«</Link>}
                <Link key={current} className="join-item btn">{current}</Link>
                {next && <Link href={next} className="join-item btn">»</Link>}

            </div>
        </div>
    );
}

export default Paginator;

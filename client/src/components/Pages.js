import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";
import './style_components.css';

const Pages = observer(() => {
    const { instrument } = useContext(Context);
    const pageCount = Math.ceil(instrument.totalCount / instrument.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className="custom-pagination mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={instrument.page === page}
                    onClick={() => instrument.setPage(page)}
                    className={instrument.page === page ? "custom-active-page" : ""} // Добавление класса "custom-active-page" для текущей страницы
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ContactList({
  contacts = [{ name: 'John', number: '555 - 452 - 521', id: 'dfv5' }],
  onDeleteContact,
}) {
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <CSSTransition key={id} appear={true} timeout={250} classNames={s}>
            <li className={s.listItem}>
              <span>
                {name}: {number}
              </span>
              <button
                type="button"
                className={s.button}
                onClick={() => onDeleteContact(id)}
              >
                Delete contact
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

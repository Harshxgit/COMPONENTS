import React, { useState } from "react";
import { motion } from "framer-motion";
export default function DragDop() {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-900">
      <Board />
    </div>
  );
}

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
 
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

//Column compoent.
const Column = ({ title, column, headingColor, cards, setCards }) => {
  const [active, setActive] = useState(null);
  const filteredCards = cards.filter((c) => c.column === column);

  const handleDragStart = (e,card)=>{
        e.dataTransfer.setData("card",card.id)
  }

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors  ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
          
        })}
        <DropIndicator beforeid={-1} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

//Card Component
const Card = ({ title, id, column ,handleDragStart}) => {
  return (
    <>
      <DropIndicator beforeid={id} column={column} />

      <motion.div
        layout
        layoutid={id}
        draggable="true"
        onDragStart = {(e)=>handleDragStart()}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeid, column }) => {
  return (
    <div
      data-before={beforeid || -1}
      data-column={column}
      className="h-0.5 w-full bg-green-600 opacity-0 "
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl" />
  );
};

const AddCard = ({ column, setCards }) => {
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };
    setCards((prev) => [...prev, newCard]);
    setAdding(false);
    setText("");
  };
  {
    return (
      <>
        {adding ? (
          <motion.form layout onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="add new text"
              className="w-full rounded border border-green-400 bg-green-400/60 text-neutral-50 placeholder-violet-300 focus:outiline-0 p-3 text-sm "
            />
            <div className="mt-1.5 item-center justify-end gap-1.5">
              <button
                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                onClick={() => setAdding(false)}
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
              >
                <span>Add</span>
                plus
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.button
            layout
            onClick={() => setAdding(true)}
            className="flex item-center w-full  gap-1.5 py-1.5 text-xs text-neutral-400 transition-color hover:text-neutral-50"
          >
            <span>Add Card</span>
            <span>Plus button</span>
          </motion.button>
        )}
      </>
    );
  }
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

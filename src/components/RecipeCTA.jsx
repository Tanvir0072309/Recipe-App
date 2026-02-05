export function RecipeCTA({
    onGetRecipe,
    onCancelRecipe,
    onImportRecipe,
    loading,
    hasRecipe
}) {
    return (
        <section className="recipe-cta">
            <div className="recipe-cta-text">
                <h2>Ready For The Recipe?</h2>
                <p>Click on the button so you will get a very tasty recipe</p>
            </div>

            <div className="recipe-cta-btn">
                <button
                    className="btn-get"
                    onClick={onGetRecipe}
                    disabled={loading}
                >
                    {loading ? "Cooking..." : "Get Recipe"}
                </button>

                {hasRecipe && (
                    <>
                        <button
                            className="btn-cancel"
                            onClick={onCancelRecipe}
                        >
                            Cancel Recipe
                        </button>

                        <button
                            className="btn-import"
                            onClick={onImportRecipe}
                        >
                            Import Recipe
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}

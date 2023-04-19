import React from 'react'
import { AdminHeaderPage } from '../../../components'
import { CategoriesTable } from '../../../components/categories'
import { useCategory } from '../../../hooks';
import { Loader } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

export function CategoriesAdmin() {
  const [refresh, setRefresh] = useState(false);
  const { categories, getCategories, error, loading } = useCategory()

  //Get user list
  useEffect(() => {
    getCategories();
    console.log('getting cats')
  }, [refresh]);

  return (
    <div>
      <AdminHeaderPage
        title="Manage categories"
        btnTitle={'New'}
        btnClick={console.log('add category')}
      />

      {loading ? (
        <Loader active inline='centered'>
          Loading
        </Loader>
      ) : (
        <CategoriesTable categories={categories} />
      )}
    </div>
  )
}
